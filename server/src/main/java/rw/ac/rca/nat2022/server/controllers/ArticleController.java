package rw.ac.rca.nat2022.server.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rw.ac.rca.nat2022.server.services.IArticleService;
import rw.ac.rca.nat2022.server.utils.dtos.NewArticleDTO;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    private final IArticleService articleService;

    public ArticleController(IArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    private ResponseEntity<?> getAllArticles() {
        return ResponseEntity.ok(articleService.getAllArticles());
    }

    @PostMapping
    private ResponseEntity<?> createArticle(@RequestBody NewArticleDTO article) {
        return ResponseEntity.ok(articleService.createArticle(article));
    }

    @GetMapping("/{id}")
    private ResponseEntity<?> getArticleById(@PathVariable Long id) {
        return ResponseEntity.ok(articleService.getArticleById(id));
    }
}
