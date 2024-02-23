package com.tames.taskmanagerapi.modules.task.entity;

import com.tames.taskmanagerapi.modules.category.entity.Category;
import com.tames.taskmanagerapi.modules.comment.entity.Comment;
import com.tames.taskmanagerapi.modules.task.enums.Priority;
import com.tames.taskmanagerapi.modules.task.enums.Status;
import com.tames.taskmanagerapi.modules.user.entity.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "task")
@NamedEntityGraphs(value = {
    @NamedEntityGraph(name = "Task.ALL", attributeNodes = {
        @NamedAttributeNode("categories"),
        @NamedAttributeNode("taskAuthor"),
        @NamedAttributeNode("comments"),
    })
})
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "title")
    private String title;

    @Column(name = "due_date")
    private LocalDate dueDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Enumerated(EnumType.STRING)
    @Column(name = "priority")
    private Priority priority;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User taskAuthor;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "task_category", joinColumns = @JoinColumn(name = "task_id"), inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "task")
    private Set<Comment> comments;

    public Task() {}

    public Task(String description, String title, LocalDate dueDate, Status status, Priority priority, User taskAuthor) {
        this.description = description;
        this.title = title;
        this.dueDate = dueDate;
        this.status = status;
        this.priority = priority;
        this.taskAuthor = taskAuthor;
        this.categories = new HashSet<>();
        this.comments = new HashSet<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public User getTaskAuthor() {
        return taskAuthor;
    }

    public void setTaskAuthor(User taskAuthor) {
        this.taskAuthor = taskAuthor;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public void addCategory(Category category) {
        this.categories.add(category);
    }

    public void addComent(Comment comment) {
        this.comments.add(comment);
    }
}
