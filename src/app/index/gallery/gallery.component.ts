import { Component, OnInit } from '@angular/core';
import {
  Image,
  ModalGalleryConfig,
  ModalGalleryRef,
  ModalGalleryService,
  ModalImage,
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  imgListString: String[] = [];
  imgList: Image[] = [];
  selectedImage: number = 0;

  constructor(private modalGalleryService: ModalGalleryService) {}

  ngOnInit(): void {
    for (let i = 1; i <= 9; i++) {
      this.imgListString.push(`assets/img/gallery/gallery${i}.jpg`);

      const img = new Image(i, {
        img: `/assets/img/gallery/${i}.jpg`,
      });

      this.imgList.push(img);
    }
  }

  openModal(imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: imageIndex,
      images: this.imgList,
      currentImage: this.imgList[imageIndex],
    } as ModalGalleryConfig) as ModalGalleryRef;
  }
}
