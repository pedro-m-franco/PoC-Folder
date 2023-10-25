package com.Application.demo.Repository;

import com.Application.demo.DTOClass.TaskDTO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.util.List;

public interface TaskRepository extends JpaRepository<TaskDTO, Integer> {

    List<TaskDTO> findByStatusAndDateBefore(boolean status, Date date);
}
