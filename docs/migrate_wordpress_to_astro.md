# WordPressをAstroに移行する

- https://docs.astro.build/ja/guides/migrate-to-astro/
  - https://docs.astro.build/ja/guides/migrate-to-astro/from-wordpress/

## 手順

1. WordPressから記事をXMLファイルにエクスポートする
  ![tool > export](/docs/images/migrate_from_wordpress/tool_to_export.png)
  ![export](/docs/images/migrate_from_wordpress/export.png)

    ```sh
    % ls -l tmp/WordPress.2023-09-18.xml
    -rw-r--r--  1 koba-masa  staff  199925  9 18 21:54 tmp/WordPress.2023-09-18.xml
    ```

2. XMLファイルをマークダウンに変換する
    1. [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown)をダウンロードする

        ```sh
        % cd tmp
        % git clone git@github.com:lonekorean/wordpress-export-to-markdown.git
        % cd wordpress-export-to-markdown
        ```

    2. 実行する

        ```sh
        % npm install && node index.js

        Starting wizard...
        ? Path to WordPress export file? ../WordPress.2023-09-18.xml
        ? Path to output folder? ..
        ? Create year folders? Yes
        ? Create month folders? Yes
        ? Create a folder for each post? Yes
        ? Prefix post folders/files with date? Yes
        ? Save images attached to posts? Yes
        ? Save images scraped from post body content? No # 意図的にNoにした
        ? Include custom post types and pages? Yes

        % find ../post -type f
        ../post/2022/04/2022-04-01-sample1/index.md
        ../post/2020/10/2020-10-28-sample2/index.md
        ../post/Invalid DateTime/Invalid DateTime/Invalid DateTime-/index.md
        ```

3. 生成されたMDファイルを移動する(本リポジトリでは、`src/pages/posts`配下)
4. 必要に応じて、修正を加える

## 参考

- Astro
  - [WordPress からの移行](https://docs.astro.build/ja/guides/migrate-to-astro/from-wordpress/)
- WordPress
  - [エクスポート](https://wordpress.com/ja/support/export/)
- XMLファイルをマークダウンファイルに変更する
  - https://github.com/lonekorean/wordpress-export-to-markdown
