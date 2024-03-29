package com.filmnecting.filmnectingproject.controllers;



import com.filmnecting.filmnectingproject.models.Film;
import com.filmnecting.filmnectingproject.services.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/api/films")
public class FilmController {
    @Autowired
    private FilmService filmService;

    @GetMapping
    public List<Film> getAllFilms() {
        return filmService.getAllFilms();
    }

    @PostMapping
    public Film createFilm(@RequestBody Film film) {
        return filmService.createFilm(film);
    }

    @GetMapping("/{id}")
    public Film getFilmById(@PathVariable Long id) {
        return filmService.getFilmById(id);
    }

    

    @DeleteMapping("/{id}")
    public void deleteFilm(@PathVariable Long id) {
        filmService.deleteFilm(id);
    }
}