package rw.ac.rca.nat2022.server.services;

import rw.ac.rca.nat2022.server.models.Article;
import rw.ac.rca.nat2022.server.utils.dtos.NewArticleDTO;

import java.util.List;

public interface IArticleService {

    List<Article> getAllArticles();

    Article getArticleById(Long id);

    Article createArticle(NewArticleDTO article);
}
