package com.tames.taskmanagerapi.modules.comment.entity;

import com.tames.taskmanagerapi.modules.task.entity.Task;
import com.tames.taskmanagerapi.modules.user.entity.User;
import jakarta.persistence.*;

@NamedEntityGraphs(value = {
    @NamedEntityGraph(name = "Comment.ALL", attributeNodes = {
        @NamedAttributeNode(value = "task"),
        @NamedAttributeNode(value = "author")
    })
})
@Entity
@Table(name = "comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "content")
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User author;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_id")
    private Task task;

    public Comment() {}

    public Comment(String content, User author, Task task) {
        this.content = content;
        this.author = author;
        this.task = task;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Task getTask() {
        return task;
    }

    public void setTask(Task task) {
        this.task = task;
    }
}
