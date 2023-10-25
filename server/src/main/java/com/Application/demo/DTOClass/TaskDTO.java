package com.Application.demo.DTOClass;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.sql.Date;

@Entity
@Table(name = "task_table")
public class TaskDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotEmpty
    @Column(name = "status", nullable = false)
    private boolean status;

    @NotEmpty
    @Column(name = "title", nullable = false)
    private String title;

    @NotEmpty
    @Column(name = "description", nullable = false)
    private String description;

    @NotEmpty
    @Column(name = "editor", nullable = false)
    private String editor;

    @NotEmpty
    @Column(name = "creator", nullable = false)
    private String creator;

    @Column(name = "date")
    //optional
    private Date date;

    public TaskDTO(){}

    public TaskDTO(int id, boolean status, String title, String description, String editor, String creator, Date date) {
        this.id = id;
        this.status = status;
        this.title = title;
        this.description = description;
        this.editor = editor;
        this.creator = creator;
        this.date = date;
    }

    public TaskDTO(Boolean status, String title, String description, String editor, String creator, Date date) {
        this.status = status;
        this.title = title;
        this.description = description;
        this.editor = editor;
        this.creator = creator;
        this.date = date;
    }

    public TaskDTO(boolean status){
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEditor() {
        return editor;
    }

    public void setEditor(String editor) {
        this.editor = editor;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
