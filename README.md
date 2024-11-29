<p align="center"><a href="https://proud-it.com/" target="_blank"><img src="https://training.proud-it.com/images/partners/goexpert-logo.png" width="400" alt="Proud IT Logo"></a></p>

## About Proud IT

ProudIT has been helping organizations throughout the World to manage their IT with our unique approach to technology management and consultancy solutions. Provide users with appropriate view and access permissions to requests, problems, changes, contracts, assets, solutions, and reports with our experienced professionals.

As one of the world's largest ITService Providers, our deep pool of certified engineers and IT staff are ready to help you to keep your IT business safe & ensure high availability.

## Asset Project

> URL Trello

```sh
https://trello.com/invite/b/lOd9uf9g/ATTI38966a03805ef28eaaa9d9a30def1796AC503841/intership-proudit-2023
```
> URL Timeline Project
```sh
https://docs.google.com/spreadsheets/d/1Ecjk8PEnPmRE3a24MLQ9E68JaKKPrZci6G5VuJCPSqo/edit?usp=sharing
```
> URL Figma
```sh
https://www.figma.com/file/7Gli1c4ZZ9mrcP9miKiX5B/Website-proud-it.com?type=design&node-id=0%3A1&mode=design&t=rV4cfsgsK4lWMEig-1
```

## Cara Install Project

1. Pastikan akun github anda sudah menjadi collaborator di repository ini.
2. Lakukan cloning project.
    ```sh
    git clone https://github.com/ervalsa/proudit-compro.git
    ```
3. Spesifikasi project ini membutuhkan **php** versi **8.2**, **composer** versi **2.5** dan **Laravel** versi **10**.
4. Install composer di project.
    ```sh
    composer install
    ```
5. Install node di project.
    ```sh
    npm install
    ```
6. Duplikasi file .env.example menjadi .env
    ```sh
    cp .env.example .env
    ```
7. Buat application key.
    ```sh
    php artisan key:generate
    ```
8. Migrate database.
    ```sh
    php artisan migrate
    ```
9. Jalankan seeder.
    > Jalankan class seeder secara spesifik
    ```sh
    php artisan db:seed --class=nama-class-seeder
    ```
    > Jalankan class seeder keseluruhan
    ```sh
    php artisan db:seed
    ```
10. Jalankan project laravel.
    ```sh
    php artisan serve
    ```
11. Jalankan node.
    ```sh
    npm run dev
    ```
12. Pastikan masuk project dengan url localhost.
    ```sh
    http://127.0.0.1:8000/
    ```
13. Selesai.

## Aturan Branching

1. Branch main dan dev, tidak boleh di utak-atik.
2. Penamaan branch per-fitur.

    ```sh
    Contoh:
    feature/ervalsa/artikel

    Aturan nama branch:
    feature/nama-programmer/nama-fitur
    ```

    > Pembuatan branch baru tanpa pindah branch otomatis.

    ```sh
    buat branch: git branch nama-branch
    pindah branch: git checkout nama-branch
    ```

    > Pembuatan branch baru sekaligus pindah ke branch otomatis.

    ```sh
    git checkout -b nama-branch
    ```

3. Selesai.

## Aturan Commit Message

1. Sebelum melakukan push kode ke github, pastikan commit message sesuai dengan aturan dibawah ini.

    > Untuk commit message fitur

    ```sh
    feat: menambahkan fitur artikel
    ```

    > Untuk commit message fix bug

    ```sh
    fix: baikin fitur artikel yang tidak mau pindah halaman
    ```

2. Selesai.

## Merging

Kode bakal di periksa (biar ga ada conflict aja) serta di merging oleh Ervalsa.

## Contributor

| Nama                  | Posisi              | Github Profile                 |
| --------------------- | ------------------- | ------------------------------ |
| Ervalsa Dwi Nanda     | Frontend Developer  | https://github.com/ervalsa     |
| Aldzi Fadlian Azka    | Fullstack Developer | https://github.com/az-ka       |
| Ihsan Ali             | Fullstack Developer | https://github.com/Ihsanalistr |
| Virgo Fajar Pamungkas | Fullstack Developer | https://github.com/vigorjs     |

Thank you for considering contributing to the project.
