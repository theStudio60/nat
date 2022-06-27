<?php
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_60394a9f7153d',
	'title' => 'Réglages',
	'fields' => array(
		array(
			'key' => 'field_60394aaa8b2ed',
			'label' => 'Réglages du Site',
			'name' => 'website_settings',
			'type' => 'group',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'layout' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_6039612818f3e',
					'label' => 'Informations de contact',
					'name' => '',
					'type' => 'tab',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'placement' => 'top',
					'endpoint' => 0,
				),
				array(
					'key' => 'field_60394b01e0e2d',
					'label' => 'Informations de contact',
					'name' => 'contact_infos',
					'type' => 'group',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'layout' => 'block',
					'sub_fields' => array(
						array(
							'key' => 'field_6039692dcfa86',
							'label' => 'Adresse Postale',
							'name' => 'post_address',
							'type' => 'text',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'default_value' => 'EMS Les 3 Sapins - Route du Village 20 - 1872 Troistorrents',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'maxlength' => '',
						),
						array(
							'key' => 'field_60394b1de0e2e',
							'label' => 'N° de Téléphone',
							'name' => 'phone_number',
							'type' => 'text',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'default_value' => '024 476 85 85',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'maxlength' => '',
						),
						array(
							'key' => 'field_6039699ccfa87',
							'label' => 'Email',
							'name' => 'email',
							'type' => 'email',
							'instructions' => 'votre email',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'default_value' => 'info@3sapins.ch',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
						),
						array(
							'key' => 'field_60399113f019a',
							'label' => 'Réseaux sociaux',
							'name' => 'social_networks_repeater',
							'type' => 'repeater',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'collapsed' => '',
							'min' => 0,
							'max' => 0,
							'layout' => 'table',
							'button_label' => 'Ajouter un réseau',
							'sub_fields' => array(
								array(
									'key' => 'field_60399135f019b',
									'label' => 'réseau social',
									'name' => 'social_network',
									'type' => 'group',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '',
										'class' => '',
										'id' => '',
									),
									'layout' => 'block',
									'sub_fields' => array(
										array(
											'key' => 'field_60399256a4372',
											'label' => 'icone',
											'name' => 'icon',
											'type' => 'font-awesome',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'icon_sets' => array(
												0 => 'far',
												1 => 'fab',
											),
											'custom_icon_set' => '',
											'default_label' => '&lt;i class="fab"&gt;&amp;#xf082;&lt;/i&gt; facebook-square',
											'default_value' => 'fab fa-facebook-square',
											'save_format' => 'class',
											'allow_null' => 0,
											'show_preview' => 1,
											'enqueue_fa' => 0,
											'fa_live_preview' => '',
											'choices' => array(
											),
										),
										array(
											'key' => 'field_603992c3a4373',
											'label' => 'Nom du réseau',
											'name' => 'network_name',
											'type' => 'text',
											'instructions' => 'Nom du réseau social (par exemple Facebook, ou Instagram)',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'default_value' => '',
											'placeholder' => '',
											'prepend' => '',
											'append' => '',
											'maxlength' => '',
										),
										array(
											'key' => 'field_60399310a4374',
											'label' => 'url de votre réseau social',
											'name' => 'network_link',
											'type' => 'url',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'default_value' => '',
											'placeholder' => '',
										),
									),
								),
							),
						),
					),
				),
				array(
					'key' => 'field_6039615218f3f',
					'label' => 'Fenêtre Pop-up',
					'name' => '',
					'type' => 'tab',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'placement' => 'top',
					'endpoint' => 0,
				),
				array(
					'key' => 'field_60395f878bca0',
					'label' => 'Fenetre Pop-up',
					'name' => 'popup_alert',
					'type' => 'group',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'layout' => 'block',
					'sub_fields' => array(
						array(
							'key' => 'field_60395fbe8bca1',
							'label' => 'Voulez-vous mettre une alerte pop-up ?',
							'name' => 'alert_condition',
							'type' => 'true_false',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'message' => '',
							'default_value' => 0,
							'ui' => 1,
							'ui_on_text' => 'Oui',
							'ui_off_text' => 'Non',
						),
						array(
							'key' => 'field_603960610eac8',
							'label' => 'Titre de la pop-up',
							'name' => 'popup_title',
							'type' => 'text',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => array(
								array(
									array(
										'field' => 'field_60395fbe8bca1',
										'operator' => '==',
										'value' => '1',
									),
								),
							),
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'maxlength' => '',
						),
						array(
							'key' => 'field_603960980eac9',
							'label' => 'Contenu de la pop-up',
							'name' => 'popup_content',
							'type' => 'wysiwyg',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => array(
								array(
									array(
										'field' => 'field_60395fbe8bca1',
										'operator' => '==',
										'value' => '1',
									),
								),
							),
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'default_value' => '',
							'tabs' => 'all',
							'toolbar' => 'full',
							'media_upload' => 1,
							'delay' => 0,
						),
					),
				),
				array(
					'key' => 'field_603a2df815448',
					'label' => 'Pied de Page',
					'name' => '',
					'type' => 'tab',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'placement' => 'top',
					'endpoint' => 0,
				),
				array(
					'key' => 'field_603a2b9c2d7d4',
					'label' => 'Pied de Page',
					'name' => 'footer',
					'type' => 'group',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'layout' => 'row',
					'sub_fields' => array(
						array(
							'key' => 'field_603a488f1dff6',
							'label' => 'Colonnes',
							'name' => 'columns',
							'type' => 'group',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array(
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'layout' => 'row',
							'sub_fields' => array(
								array(
									'key' => 'field_603a49131dff7',
									'label' => 'colonne 1',
									'name' => 'column_1',
									'type' => 'group',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '25',
										'class' => '',
										'id' => '',
									),
									'layout' => 'block',
									'sub_fields' => array(
										array(
											'key' => 'field_603a49bffd163',
											'label' => 'Image',
											'name' => 'image',
											'type' => 'image',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'default_value' => '',
											'placeholder' => '',
											'prepend' => '',
											'append' => '',
											'maxlength' => '',
											'return_format' => 'array',
											'preview_size' => 'medium',
											'library' => 'all',
											'min_width' => 0,
											'min_height' => 0,
											'min_size' => 0,
											'max_width' => 0,
											'max_height' => 0,
											'max_size' => 0,
											'mime_types' => '',
										),
									),
								),
								array(
									'key' => 'field_603a49471dff8',
									'label' => 'colonne 2',
									'name' => 'column_2',
									'type' => 'group',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '25',
										'class' => '',
										'id' => '',
									),
									'layout' => 'block',
									'sub_fields' => array(
										array(
											'key' => 'field_603a5deb2f886',
											'label' => 'Titre',
											'name' => 'title',
											'type' => 'text',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'default_value' => 'à propos',
											'placeholder' => '',
											'prepend' => '',
											'append' => '',
											'maxlength' => '',
										),
										array(
											'key' => 'field_603a5e0a2f887',
											'label' => 'Contenu',
											'name' => 'content',
											'type' => 'textarea',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'default_value' => 'EMS Les 3 Sapins
Route du Village 20,
1872 Troistorrents',
											'placeholder' => '',
											'maxlength' => '',
											'rows' => '',
											'new_lines' => 'br',
										),
									),
								),
								array(
									'key' => 'field_603a6314522cd',
									'label' => 'colonne 3',
									'name' => 'column_3',
									'type' => 'group',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '25',
										'class' => '',
										'id' => '',
									),
									'layout' => 'block',
									'sub_fields' => array(
										array(
											'key' => 'field_603a6314522ce',
											'label' => 'Titre',
											'name' => 'title',
											'type' => 'text',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'default_value' => 'Horaires de visite',
											'placeholder' => '',
											'prepend' => '',
											'append' => '',
											'maxlength' => '',
										),
										array(
											'key' => 'field_603a6314522cf',
											'label' => 'Contenu',
											'name' => 'content',
											'type' => 'textarea',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'default_value' => 'Lundi – vendredi
8h00 – 12h00 / 13h30 – 18h00
Samedi
8h00 – 12h00',
											'placeholder' => '',
											'maxlength' => '',
											'rows' => '',
											'new_lines' => 'br',
										),
									),
								),
								array(
									'key' => 'field_603a631f522d0',
									'label' => 'colonne 4',
									'name' => 'column_4',
									'type' => 'group',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '25',
										'class' => '',
										'id' => '',
									),
									'layout' => 'block',
									'sub_fields' => array(
										array(
											'key' => 'field_603a631f522d1',
											'label' => 'Titre',
											'name' => 'title',
											'type' => 'text',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'default_value' => 'Prestations & Soins',
											'placeholder' => '',
											'prepend' => '',
											'append' => '',
											'maxlength' => '',
										),
										array(
											'key' => 'field_603a631f522d2',
											'label' => 'Contenu',
											'name' => 'content',
											'type' => 'textarea',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'default_value' => '',
											'placeholder' => '',
											'maxlength' => '',
											'rows' => '',
											'new_lines' => 'br',
										),
									),
								),
							),
						),
					),
				),
			),
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'site-options',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'acf_after_title',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => array(
		0 => 'permalink',
		1 => 'the_content',
		2 => 'excerpt',
		3 => 'discussion',
		4 => 'comments',
		5 => 'revisions',
		6 => 'slug',
		7 => 'author',
		8 => 'format',
		9 => 'page_attributes',
		10 => 'featured_image',
		11 => 'categories',
		12 => 'tags',
		13 => 'send-trackbacks',
	),
	'active' => true,
	'description' => '',
));

endif;
?>