import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { Item } from '../../../services/item';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemCreateComponent } from './item-create/item-create.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    CommonModule,
    ItemDisplayComponent,
    ItemEditComponent,
    ItemCreateComponent,
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  title = 'ng-client';
  posts: Item[] = [];
  errorMessage!: string;
  editPost: Item = {
    id: 0,
    title: '',
    body: '',
  };

  protected showFormEdit: string | undefined = 'none';
  protected showFormAll: string | undefined = 'inline';
  protected showFormCreate: string | undefined = 'none';

  constructor(private data_service: DataService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  handleremove(event: Item) {
    this.data_service.remove(event).subscribe({
      next: () => {
        this.getAllPosts();
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  handleEdit(event: Item) {
    this.editPost = event;
    this.showFormEdit = 'inline';
    this.showFormAll = 'none';
  }

  update(event: Item) {
    this.data_service.update(event).subscribe({
      next: () => {
        this.getAllPosts();
        this.showFormEdit = 'none';
        this.showFormAll = 'inline';
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  add(event: Item) {
    this.data_service.create(event).subscribe({
      next: () => {
        this.getAllPosts();
        this.showFormCreate = 'none';
        this.showFormAll = 'inline';
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  getAllPosts() {
    this.data_service.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  handleAdd() {
    this.showFormCreate = 'inline';
    this.showFormAll = 'none';
  }
}
