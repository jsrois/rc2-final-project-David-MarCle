package com.filmnecting.filmnectingproject.repository;


import com.filmnecting.filmnectingproject.models.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmRepository extends JpaRepository<Film, Long> {
}
