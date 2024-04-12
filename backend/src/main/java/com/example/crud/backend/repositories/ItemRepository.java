package com.example.crud.backend.repositories;

import com.example.crud.backend.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}