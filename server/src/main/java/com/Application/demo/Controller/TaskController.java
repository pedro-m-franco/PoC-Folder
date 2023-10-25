package com.Application.demo.Controller;

import com.Application.demo.DTOClass.TaskDTO;
import com.Application.demo.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;

@RestController
@RequestMapping("/task")
@CrossOrigin("http://localhost:3000")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping(path = "/")
    public ResponseEntity<Object> getAllTasks(){
        return taskService.getAllTasks();
    }


    @GetMapping(path = "/id/{id}")
    public ResponseEntity<Object> getTaskById(@PathVariable int id){
        return taskService.getTaskById(id);
    }

    @PutMapping(path = "/id/{id}")
    public ResponseEntity<Object> updateTask(@PathVariable int id, @RequestBody TaskDTO task){
        return taskService.updateTask(id, task);
    }

    @PatchMapping(path = "/id/{id}")
    public ResponseEntity<Object> updateStatusTask(@PathVariable int id){
        return taskService.patchStatusTask(id);
    }

    /**
     * runs one time each 24h, making sure there are no open tasks with expiration date already over
     */
    @Scheduled(fixedRate = 24 * 60 * 60 * 1000)
    public void fixStatusIfExpires() {
        taskService.fixStatusIfExpires();
    }
}
