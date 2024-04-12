package com.example.crud.backend.controllers;
import com.example.crud.backend.dtos.ItemDto;
import com.example.crud.backend.services.ItemService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;

    @GetMapping("/items")
    public ResponseEntity<List<ItemDto>> allItems() {
        return ResponseEntity.ok(itemService.allItems());
    }

    @PostMapping("/items")
    public ResponseEntity<ItemDto> createItem(@Valid @RequestBody ItemDto ItemDto) {
        ItemDto createdItem = itemService.createItem(ItemDto);
        return ResponseEntity.created(URI.create("/items/" + ItemDto.getId())).body(createdItem);
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<ItemDto> getItem(@PathVariable Long id) {
        return ResponseEntity.ok(itemService.getItem(id));
    }

    @PutMapping("/items/{id}")
    public ResponseEntity<ItemDto> updateItem(@PathVariable Long id, @Valid @RequestBody ItemDto ItemDto) {
        return ResponseEntity.ok(itemService.updateItem(id, ItemDto));
    }

    @PatchMapping("/items/{id}")
    public ResponseEntity<ItemDto> patchItem(@PathVariable Long id, @RequestBody ItemDto ItemDto) {
        return ResponseEntity.ok(itemService.patchItem(id, ItemDto));
    }

    @DeleteMapping("/items/{id}")
    public ResponseEntity<ItemDto> deleteItem(@PathVariable Long id) {
        return ResponseEntity.ok(itemService.deleteItem(id));
    }
}
