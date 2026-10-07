import { existsSync } from 'fs';
import { join } from 'path';

import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

@Injectable()
export class FilesService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  getStaticProductImage(imageName: string) {
    const path = join(__dirname, '../../static/products', imageName);

    if (!existsSync(path))
      throw new BadRequestException(`No product found with image ${imageName}`);

    return path;
  }

  async uploadProductImage(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Make sure that the file is an image');
    }

    const result = await this.uploadToCloudinary(file);

    return {
      secureUrl: result.secure_url,
      fileName: result.secure_url,
    };
  }

  private uploadToCloudinary(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: 'giss-shop/products',
            resource_type: 'image',
          },
          (error, result) => {
            if (error || !result) {
              return reject(
                new InternalServerErrorException(
                  'Could not upload image to Cloudinary',
                ),
              );
            }
            resolve(result);
          },
        )
        .end(file.buffer);
    });
  }
}
