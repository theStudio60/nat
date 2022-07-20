<?php

    $posts = $args['posts'];

    echo '<div id="thumbnail_section" class="section__row">';
        foreach($posts as $post) {
            $datatag = '';
            $i = 0;
            foreach($post['tags'] as $tag) {
                $datatag .= ' data-'.$tag.'="'.$tag.'"';
                $i++;
            }
            echo '<img class="oeuvreThumbnail" '.$datatag.' src="'.$post['image_de_presentation']['url'].'">';
        }
    echo '</div>';