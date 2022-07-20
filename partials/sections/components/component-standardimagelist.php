<?php

    $posts = $args['posts'];
    $tags = $args['tags'];

    foreach(array_keys($tags) as $tag) {
        $tagHydrated = get_tag($tag);
        $tags[$tag] = ['id' => $tag, 'name' => $tagHydrated->name, 'slug' => $tagHydrated->slug, 'posts' => $tags[$tag]];
    }

    foreach($tags as $tag) {

        echo '<h1 class="title title--white title--centered border">'.$tag['name'].'</h1>';

        foreach($posts as $post) {
            if(in_array($post['id'], $tag['posts'])) {
                echo '<div id="thumbnail_section" class="section__row">';
                echo '<img src="'.$post["vignette"]["url"].'">';
                echo '</div>';
            }
        }

    }
