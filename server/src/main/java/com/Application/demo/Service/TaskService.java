package com.Application.demo.Service;

import com.Application.demo.DTOClass.TaskDTO;
import com.Application.demo.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.Application.demo.Exceptions.MessageException;

import java.sql.Date;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public ResponseEntity<Object> getAllTasks() {
        try {
            return ResponseEntity.ok(taskRepository.findAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    public ResponseEntity<Object> getTaskById(int id) {
        try {
            return ResponseEntity.ok(getTaskIfExist(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    public ResponseEntity<Object> updateTask(int id, TaskDTO taskDTO) {
        try {
            TaskDTO task = getTaskIfExist(id);
            if(!taskDTO.getCreator().equals(task.getCreator()))
                throw new MessageException("Creator cannot be changed.");

            return ResponseEntity.ok(taskRepository.save(taskDTO));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    public ResponseEntity<Object> patchStatusTask(int id) {
        try {
            TaskDTO task = getTaskIfExist(id);
            task.setStatus(!task.getStatus());
            return ResponseEntity.ok(taskRepository.save(task));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    public void fixStatusIfExpires() {
        try {
            List<TaskDTO> listToUpdate = taskRepository.findByStatusAndDateBefore(true, new Date(System.currentTimeMillis()));
            listToUpdate.replaceAll(task -> {
                task.setStatus(false);
                return task;
            });
            taskRepository.saveAll(listToUpdate);
        } catch (Exception e) {
            ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private TaskDTO getTaskIfExist(int id) throws MessageException {
        return taskRepository.findById(id).orElseThrow(() -> new MessageException("Task with such id does not exist."));
    }
}