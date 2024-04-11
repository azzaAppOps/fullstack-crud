package com.example.crud.backend.controllers;
import com.example.crud.backend.dtos.ItemDto;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class ItemController {
    @GetMapping("/items")
    public ResponseEntity<List<ItemDto>> allItems() {
        return ResponseEntity.ok(itemService.allItems());
    }

    @PostMapping("/items")
    public ResponseEntity<ItemDto> createItem(@Valid @RequestBody ItemDto ItemDto) {
        ItemDto createdVehicle = itemService.createItem(ItemDto);
        return ResponseEntity.created(URI.create("/items/" + ItemDto.getId())).body(createdVehicle);
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<ItemDto> getItem(@PathVariable Long id) {
        return ResponseEntity.ok(vehicleService.getItem(id));
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
