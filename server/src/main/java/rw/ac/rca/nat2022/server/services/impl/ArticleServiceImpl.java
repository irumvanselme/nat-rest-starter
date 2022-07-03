package rw.ac.rca.nat2022.server.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import rw.ac.rca.nat2022.server.models.Article;
import rw.ac.rca.nat2022.server.repositories.IArticleRepository;
import rw.ac.rca.nat2022.server.services.IArticleService;
import rw.ac.rca.nat2022.server.services.IUserService;
import rw.ac.rca.nat2022.server.utils.dtos.NewArticleDTO;

import java.util.List;

@Service
public class ArticleServiceImpl implements IArticleService {

    private final IArticleRepository articleRepository;

    private final IUserService userService;

    public ArticleServiceImpl(IArticleRepository articleRepository, IUserService userService) {
        this.articleRepository = articleRepository;
        this.userService = userService;
    }

    @Override
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    @Override
    public Article getArticleById(Long id) {
        return articleRepository.findById(id).orElseThrow(() -> new RuntimeException("Article not found with id"));
    }

    @Override
    public Article createArticle(NewArticleDTO article) {
        Article theArticle = new ModelMapper().map(article, Article.class);

        theArticle.setCreator(userService.getLoggedInUser());

        return articleRepository.save(theArticle);
    }
}
