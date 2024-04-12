package com.example.crud.backend.services;



import com.example.crud.backend.dtos.ItemDto;
import com.example.crud.backend.entities.Item;
import com.example.crud.backend.exceptions.AppException;
import com.example.crud.backend.mappers.ItemMapper;
import com.example.crud.backend.repositories.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;
    private final ItemMapper itemMapper;

    public List<ItemDto> allItems() {
        List<Item> items = itemRepository.findAll();
        return itemMapper.toItemDtos(items);
    }

    public ItemDto createItem(ItemDto ItemDto) {
        Item item = itemMapper.toItem(ItemDto);

        Item savedItem = itemRepository.save(item);

        return itemMapper.toItemDto(savedItem);
    }

    public ItemDto updateItem(Long id, ItemDto ItemDto) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
        itemMapper.updateItem(item, itemMapper.toItem(ItemDto));
        Item savedItem = itemRepository.save(item);
        return itemMapper.toItemDto(savedItem);
    }

    public ItemDto patchItem(Long id, ItemDto ItemDto) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));

        if (ItemDto.getTitle() != null) {
            item.setTitle(ItemDto.getTitle());
        }
        if (ItemDto.getBody() != null) {
            item.setBody(ItemDto.getBody());
        }


        Item savedItem= itemRepository.save(item);

        return itemMapper.toItemDto(savedItem);
    }

    public ItemDto deleteItem(Long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
        ItemDto itemDto = itemMapper.toItemDto(item);

        itemRepository.deleteById(id);

        return itemDto;
    }

    public ItemDto getItem(Long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
        return itemMapper.toItemDto(item);
    }
}