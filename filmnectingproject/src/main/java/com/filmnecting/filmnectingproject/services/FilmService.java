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

    // Métodos para lógica de negocio
}

