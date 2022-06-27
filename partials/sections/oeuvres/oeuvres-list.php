<?php

    $query = new WP_Query(array(
        'post_type' => 'oeuvre',
        'post_status' => 'publish'
    ));

    $posts = [];
    $tags = [];

    while ($query->have_posts()) {
        $query->the_post();
        $post_id = get_the_ID();
        $post_fields = get_fields();
        $post_fields['id'] = get_the_ID();
        $posts[] = $post_fields;
        foreach($post_fields['tags'] as $tag) {
            isset($tags[$tag]) ? $tags[$tag]++ : $tags[$tag] = 1;
        }

    }

    foreach(array_keys($tags) as $tag) {
        $tagHydrated = get_tag($tag);
        $tags[$tag] = ['id' => $tag, 'name' => $tagHydrated->name, 'slug' => $tagHydrated->slug, 'occurences' => $tags[$tag]];
    }

    usort($tags, function($a, $b) {
        return $b['occurences'] <=> $a['occurences'];
    });

    $spanTags = [];
    $nbTags = sizeof($tags);
    $i = 0;

    foreach($tags as $tag) {

        $sizeClass = 'bottomSize';
        $top = 1 - ($i / $nbTags);

        if($top > 0.75) {
            $sizeClass = 'topSize';
        } else if($top > 0.5) {
            $sizeClass = 'middleTopSize';
        } else if($top > 0.25) {
            $sizeClass = 'middleBottomSize';
        }

        $spanTags[] = '<span class="spanTag '.$sizeClass.'" data-id="'.$tag['id'].'">'.$tag['name'].'('.$tag['occurences'].')</span>';
        $i++;
    }

    shuffle($spanTags);

    echo '<div class="section__row" style="margin-bottom: 50px !important;">';
        foreach($spanTags as $spanTag) {
            echo $spanTag;
        }
    echo '</div>';

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