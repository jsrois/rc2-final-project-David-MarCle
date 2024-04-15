package com.filmnecting.filmnectingproject.services;


import com.filmnecting.filmnectingproject.models.Film;
import com.filmnecting.filmnectingproject.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {
    @Autowired
    private FilmRepository filmRepository;

    public Film save(Film film) {
        return filmRepository.save(film);
    }

    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }

    public Film createFilm(Film film) {
        return filmRepository.save(film);
    }

    public Film getFilmById(Long id) {
        return filmRepository.findById(id).orElse(null);
    }


    public void deleteFilm(Long id) {
        filmRepository.deleteById(id);
    }
}

