package com.example.crud.backend.mappers;

import com.example.crud.backend.dtos.ItemDto;
import com.example.crud.backend.entities.Item;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ItemMapper {

    Item toItem(ItemDto itemDto);

    ItemDto toItemDto(Item item);

    List<ItemDto> toItemDtos(List<Item> items);

    void updateItem(@MappingTarget Item target, Item source);
}