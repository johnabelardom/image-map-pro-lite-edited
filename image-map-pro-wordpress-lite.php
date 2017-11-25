<?php

/*
Plugin Name: Image Map Pro Lite
Plugin URI: http://www.webcraftplugins.com/image-map-pro/
Version: 1.0.0
Author: Webcraft Plugins Ltd.
Author URI: https://webcraftplugins.com/
Description: The most advanced image map builder for WordPress
License: GPLv2
*/

// Debugging Class
if (class_exists('PhpConsole')) {
	if (!PhpConsole\Helper::isRegistered()) {
		PhpConsole\Helper::register();
	}
}

if (!class_exists('ImageMapProLite')) {
	class ImageMapPro {
		function __construct() {
			$this->version = '1.0.0';
			$this->admin_options_name = 'image-map-pro-wordpress-lite-admin-options';
			$this->default_settings = array(
				"purchase_code" => '',
				"saves" => array(),
				"last_save_id" => ""
			);
			$this->pagename = 'image-map-pro-wordpress-lite';
			$this->new_pagename = 'new_image-map-pro-wordpress-lite';

			// $options = get_option($this->admin_options_name);
			// $options['purchase_code'] = '';
			// update_option($this->admin_options_name, $options);

			// Check if session has already started
			$started = false;
			if (version_compare(phpversion(), '5.4.0') != -1) { 
				if (session_status() == PHP_SESSION_NONE) {
					$started = true;
				}
			} else {
				if(session_id() == '') {
					$started = true;
				}
			}

			if (!$started) {
				session_start();
			}
			
			$_SESSION['image-map-pro-lite-shortcodes'] = array();
		}
		function get_admin_options() {
			$admin_options = array(
				"purchase_code" => '',
				"saves" => array(),
				"last_save_id" => ""
			);

			$loaded_options = get_option($this->admin_options_name);

			if (!empty($loaded_options)) {
				foreach ($loaded_options as $key => $option) {
					$admin_options[$key] = $option;
				}
			} else {
				$loaded_options = $this->default_settings;
			}

			update_option($this->admin_options_name, $admin_options);
			return $admin_options;
		}
		function init_pages() {
			add_menu_page("Image Map Pro Lite", "Image Map Pro Lite", "manage_options", $this->pagename, array($this, "print_options_page"));
			add_submenu_page($this->pagename, "Add Exhibitors", "Add Exhibitors", "administrator", 'add-exhibitors', array($this, "print_add_exhibitors_page"));
		}

		function register_admin_includes() {
			/* [dev start]
			// Lite
			wp_register_style('image-map-pro-wordpress-lite', plugins_url('/css/image-map-pro-lite.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite', plugins_url('/js/image-map-pro-lite.js', __FILE__), false, $this->version, true);

			// Defaults
			wp_register_script('image-map-pro-wordpress-lite-defaults-js', plugins_url('/js/image-map-pro-defaults.js', __FILE__), false, $this->version, true);

			// Squares
			wp_register_style('image-map-pro-wordpress-lite-squares-css', plugins_url('/submodules/squares/css/squares.css', __FILE__), false, $this->version, false);
			wp_register_style('image-map-pro-wordpress-lite-squares-editor-css', plugins_url('/submodules/squares/css/squares-editor.css', __FILE__), false, $this->version, false);
			wp_register_style('image-map-pro-wordpress-lite-squares-controls-css', plugins_url('/submodules/squares/css/squares-controls.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-squares-js', plugins_url('/submodules/squares/js/squares.js', __FILE__), false, $this->version, true);
			wp_register_script('image-map-pro-wordpress-lite-squares-renderer-js', plugins_url('/submodules/squares/js/squares-renderer.js', __FILE__), array('jquery'), $this->version, true);
			wp_register_script('image-map-pro-wordpress-lite-squares-elements-js', plugins_url('/submodules/squares/js/squares-elements-wp.js', __FILE__), false, $this->version, true);
			wp_register_script('image-map-pro-wordpress-lite-squares-controls-js', plugins_url('/submodules/squares/js/squares-controls.js', __FILE__), false, $this->version, true);

			// Compress
			wp_register_script('image-map-pro-wordpress-lite-wcp-compress-js', plugins_url('/submodules/wcp-compress/js/wcp-compress.js', __FILE__), false, $this->version, true);

			// WCP Editor
			wp_register_style('image-map-pro-wordpress-lite-wcp-editor-css', plugins_url('/submodules/wcp-editor/css/wcp-editor.css', __FILE__), false, $this->version, false);
			wp_register_style('image-map-pro-wordpress-lite-wcp-editor-controls-css', plugins_url('/submodules/wcp-editor/css/wcp-editor-controls.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-wcp-editor-js', plugins_url('/submodules/wcp-editor/js/wcp-editor.js', __FILE__), false, $this->version, true);
			wp_register_script('image-map-pro-wordpress-lite-wcp-editor-controls-js', plugins_url('/submodules/wcp-editor/js/wcp-editor-controls.js', __FILE__), false, $this->version, true);

			// Icons
			wp_register_script('image-map-pro-wordpress-lite-wcp-icons-js', plugins_url('/submodules/wcp-icons/js/wcp-icons.js', __FILE__), false, $this->version, true);

			// WCP Tour
			wp_register_style('image-map-pro-wordpress-lite-wcp-tour-css', plugins_url('/submodules/wcp-tour/css/wcp-tour.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-wcp-tour-js', plugins_url('/submodules/wcp-tour/js/wcp-tour.js', __FILE__), false, $this->version, true);

			// WCP Validate Purchase
			wp_register_script('image-map-pro-wordpress-lite-wcp-validate-purchase-js', plugins_url('/submodules/wcp-validate-purchase/js/wcp-validate-purchase.js', __FILE__), false, $this->version, true);

			// WCP WP Media
			wp_register_script('image-map-pro-wordpress-lite-wcp-wp-media-js', plugins_url('/submodules/wcp-wp-media/js/wcp-wp-media.js', __FILE__), false, $this->version, true);

			// Plugin
			wp_register_style('image-map-pro-wordpress-lite-css', plugins_url('/css/image-map-pro.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-js', plugins_url('/js/image-map-pro.js', __FILE__), false, $this->version, true);

			// Image Map Pro Editor
			wp_register_style('image-map-pro-wordpress-lite-editor-css', plugins_url('/css/image-map-pro-editor.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-editor-js', plugins_url('/js/image-map-pro-editor-lite.js', __FILE__), false, $this->version, true);
			wp_register_script('image-map-pro-wordpress-lite-editor-init-js', plugins_url('/js/image-map-pro-editor-init-lite.js', __FILE__), false, $this->version, true);
			wp_register_script('image-map-pro-wordpress-lite-editor-content-js', plugins_url('/js/image-map-pro-editor-content.js', __FILE__), false, $this->version, true);
			wp_register_script('image-map-pro-wordpress-lite-editor-wp-storage-js', plugins_url('/js/image-map-pro-editor-wp-storage.js', __FILE__), false, $this->version, true);

			// Admin Stuffs
			wp_register_style('image-map-pro-wordpress-lite-admin-css', plugins_url('/css/admin.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-admin-js', plugins_url('/js/admin.js', __FILE__), false, $this->version, true);
			[dev end] */

			// /* [dist start]
			wp_register_style('image-map-pro-wordpress-lite-editor-dist-css', plugins_url('/css/editor.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-editor-dist-js', plugins_url('/js/editor.js', __FILE__), array('jquery'), $this->version, true);
			// [dist end] */
		}
		function register_client_includes() {
			/* [dev start]
			// Defaults
			wp_register_script('image-map-pro-wordpress-lite-defaults-js', plugins_url('/js/image-map-pro-defaults.js', __FILE__), false, $this->version, true);

			// Squares
			wp_register_style('image-map-pro-wordpress-lite-squares-css', plugins_url('/submodules/squares/css/squares.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-squares-renderer-js', plugins_url('/submodules/squares/js/squares-renderer.js', __FILE__), array('jquery'), $this->version, true);
			wp_register_script('image-map-pro-wordpress-lite-squares-elements-js', plugins_url('/submodules/squares/js/squares-elements-wp.js', __FILE__), false, $this->version, true);

			// Plugin
			wp_register_style('image-map-pro-wordpress-lite-css', plugins_url('/css/image-map-pro.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-js', plugins_url('/js/image-map-pro.js', __FILE__), array('jquery'), $this->version, true);
			[dev end] */

			// /* [dist start]
			wp_register_style('image-map-pro-wordpress-lite-dist-css', plugins_url('/css/image-map-pro.min.css', __FILE__), false, $this->version, false);
			wp_register_script('image-map-pro-wordpress-lite-dist-js', plugins_url('/js/image-map-pro.min.js', __FILE__), array('jquery'), $this->version, true);
			// [dist end] */
		}
		function enqueue_admin_includes() {
			wp_enqueue_script('jquery');
			wp_enqueue_media();

			/* [dev start]
			// Lite
			wp_enqueue_style('image-map-pro-wordpress-lite');
			wp_enqueue_script('image-map-pro-wordpress-lite');

			// Defaults
			wp_enqueue_script('image-map-pro-wordpress-lite-defaults-js');

			// Squares
			wp_enqueue_style('image-map-pro-wordpress-lite-squares-css');
			wp_enqueue_style('image-map-pro-wordpress-lite-squares-editor-css');
			wp_enqueue_style('image-map-pro-wordpress-lite-squares-controls-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-squares-js');
			wp_enqueue_script('image-map-pro-wordpress-lite-squares-renderer-js');
			wp_enqueue_script('image-map-pro-wordpress-lite-squares-elements-js');
			wp_enqueue_script('image-map-pro-wordpress-lite-squares-controls-js');

			// Compress
			wp_enqueue_script('image-map-pro-wordpress-lite-wcp-compress-js');

			// WCP Editor
			wp_enqueue_style('image-map-pro-wordpress-lite-wcp-editor-css');
			wp_enqueue_style('image-map-pro-wordpress-lite-wcp-editor-controls-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-wcp-editor-js');
			wp_enqueue_script('image-map-pro-wordpress-lite-wcp-editor-controls-js');

			// Icons
			wp_enqueue_script('image-map-pro-wordpress-lite-wcp-icons-js');

			// WCP Tour
			wp_enqueue_style('image-map-pro-wordpress-lite-wcp-tour-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-wcp-tour-js');

			// WCP Validate Purchase
			wp_enqueue_script('image-map-pro-wordpress-lite-wcp-validate-purchase-js');

			// WCP WP Media
			wp_enqueue_script('image-map-pro-wordpress-lite-wcp-wp-media-js');

			// Plugin
			wp_enqueue_style('image-map-pro-wordpress-lite-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-js');

			// Image Map Pro Editor
			wp_enqueue_style('image-map-pro-wordpress-lite-editor-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-editor-js');
			wp_enqueue_script('image-map-pro-wordpress-lite-editor-init-js');
			wp_enqueue_script('image-map-pro-wordpress-lite-editor-content-js');
			wp_enqueue_script('image-map-pro-wordpress-lite-editor-wp-storage-js');

			// Admin Stuffs
			wp_enqueue_style('image-map-pro-wordpress-lite-admin-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-admin-js');
			[dev end] */

			// /* [dist start]
			wp_enqueue_style('image-map-pro-wordpress-lite-editor-dist-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-editor-dist-js');
			// [dist end] */
		}
		function enqueue_client_includes() {
			wp_enqueue_script('jquery');

			/* [dev start]
			wp_enqueue_script('image-map-pro-wordpress-lite-defaults-js');

			wp_enqueue_style('image-map-pro-wordpress-lite-squares-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-squares-renderer-js');
			wp_enqueue_script('image-map-pro-wordpress-lite-squares-elements-js');

			wp_enqueue_style('image-map-pro-wordpress-lite-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-js');
			[dev end] */

			// /* [dist start]
			wp_enqueue_style('image-map-pro-wordpress-lite-dist-css');
			wp_enqueue_script('image-map-pro-wordpress-lite-dist-js');
			// [dist end] */
		}
		function shortcodes() {
			$options = $this->get_admin_options();
			$saves = $options['saves'];

			foreach ($saves as $save) {
				if (isset($save['meta']['shortcode']) && strlen($save['meta']['shortcode']) > 0) {
					add_shortcode($save['meta']['shortcode'], array($this, 'print_shortcode'));
				}
			}
		}
		function print_shortcode($a, $b, $shortcode) {
			$options = $this->get_admin_options();
			$saves = $options['saves'];
			$result = false;

			foreach ($saves as $id => $save) {
				if (isset($save['meta']['shortcode']) && $save['meta']['shortcode'] == $shortcode) {
					$result = '<div id="image-map-pro-'. $id .'"></div>';

					if (isset($_SESSION['image-map-pro-lite-shortcodes'])) {
						array_push($_SESSION['image-map-pro-lite-shortcodes'], $shortcode);
					}
				}
			}

			if ($result) {
				add_action('wp_footer', array($this, 'call_plugin'));
			}

			return $result;
		}
		function call_plugin() {
			$this->enqueue_client_includes();
			
			$options = $this->get_admin_options();
			$saves = $options['saves'];

			foreach ($saves as $id => $save) {

				if (isset($_SESSION['image-map-pro-lite-shortcodes'])) {
					if (array_search($save['meta']['shortcode'], $_SESSION['image-map-pro-lite-shortcodes']) === false) {
						continue;
					}
				}
				
				?>
				<script>
				;(function ($, window, document, undefined ) {
					$(document).ready(function() {
						setTimeout(function() {
							
						<?php

						$save = $this->sanitize_json_for_save($save);

						echo 'var settings = '. $save['json'] .';' . "\n";
						echo "$('#image-map-pro-". $id . "').imageMapPro(settings);";

						?>

						}, 0);
					});
				})(jQuery, window, document);
				</script>
				<?php

				$parsed = json_decode($save['json']);

				if (isset($parsed->custom_code->custom_css) && strlen($parsed->custom_code->custom_css) > 0) {
					echo '<style type="text/css">'. $this->clean_code($parsed->custom_code->custom_css) .'</style>';
				}
				if (isset($parsed->custom_code->custom_js) && strlen($parsed->custom_code->custom_js) > 0) {
					echo '<script>'. $this->clean_code($parsed->custom_code->custom_js) .'</script>' . "\n";
				}
			}
			
			?>
			
			<?php
			
		}
		function print_options_page() {
			$options = $this->get_admin_options();
			$this->enqueue_admin_includes();
			
			?>
			<div id="instance-options-wrap" data-purchase-code="<?php echo $options['purchase_code']; ?>">
				<div id="wcp-editor">
					
				</div>
			</div>
			<?php
		}
		function print_add_exhibitors_page() {
			$options = $this->get_admin_options();
			$this->enqueue_admin_includes();
			echo "[attc id=1]";
			include_once( ABSPATH . 'wp-content/plugins/table-creator/includes/classes/ATTC_database.php' );
			$tablegen = new ATTC_database;
			if(is_plugin_active('table-creator/tablegen-data-table-generator.php')){
			    var_dump("nyeam");
			    var_dump('<pre>', $tablegen->get_all());
			}
		}
		function sanitize_json_for_save($save) {
			$json = $save['json'];

			$json = str_replace('\\\n', "<br>", $json); // Replace new line characters with <br>
			$json = str_replace('\"', '"', $json); // Replace \" with "
			$json = str_replace("\\'", "'", $json); // Replace \' with '
			$json = str_replace('\\\"', '\"', $json); // Replace \\" with \"
			
			$decoded = json_decode($json);
			
			for ($i=0; $i<count($decoded->spots); $i++) {
				$spot = $decoded->spots[$i];

				if (isset($spot->tooltip_content->plain_text)) {
					$spot->tooltip_content->plain_text = do_shortcode($spot->tooltip_content->plain_text);

					$pattern = '/\\+"/';
					$spot->tooltip_content->plain_text = preg_replace($pattern, '\"', $spot->tooltip_content->plain_text);
				}
				
				if (isset($spot->tooltip_content->squares_settings)) {
					// Loop over containers
					for ($j=0; $j<count($spot->tooltip_content->squares_settings->containers); $j++) {
						$container = $spot->tooltip_content->squares_settings->containers[$j];
						$elements = $container->settings->elements;

						// Loop over elements
						for ($k=0; $k<count($elements); $k++) {
							$element = $elements[$k];

							if ($element->settings->name == 'Paragraph') {
								// Replace
								if (isset($element->options->text->text)) {
									$element->options->text->text = do_shortcode($element->options->text->text);

									$pattern = '/\\+"/';
									$element->options->text->text = preg_replace($pattern, '\"', $element->options->text->text);
								}
							}
						}
					}
				}
			}

			$save['json'] = json_encode($decoded);
			return $save;
		}
		function clean_code($code) {
			$formatted = preg_replace("/\s+/", " ", $code);
			$formatted = preg_replace("/<br>/", '', $formatted);
			$formatted = preg_replace("/\\\\t/", ' ', $formatted);

			return $formatted;
		}

		// AJAX

		function ajax_get_last_save() {
			$options = $this->get_admin_options();

			if (isset($options['last_save_id'])) {
				echo $options['last_save_id'];
			}

			die();
		}
		function ajax_set_last_save() {
			$options = $this->get_admin_options();

			$options['last_save_id'] = $_POST['saveID'];
			update_option($this->admin_options_name, $options);

			die();
		}
		function ajax_store_save() {
			$json = '';
			$id = 0;
			$name = '';
			$shortcode = '';

			if (isset($_POST['json'])) {
				$json = $_POST['json'];
			}
			if (isset($_POST['saveID'])) {
				$id = $_POST['saveID'];
			}
			if (isset($_POST['name'])) {
				$name = $_POST['name'];
			}
			if (isset($_POST['shortcode'])) {
				$shortcode = $_POST['shortcode'];
			}

			$options = get_option($this->admin_options_name);
			$options['saves'][$id] = array(
				"json" => $json,
				"meta" => array(
					"name" => $name,
					"shortcode" => $shortcode
				)
			);
			update_option($this->admin_options_name, $options);

			// Verify
			$options = get_option($this->admin_options_name);
			$storedJSON = $options['saves'][$id]['json'];
			echo $storedJSON;

			die();
		}
		function ajax_get_save() {
			$id = $_POST['saveID'];

			$options = get_option($this->admin_options_name);
			$save = $options['saves'][$id];
			echo $save['json'];
			die();
		}
		function ajax_delete_save() {
			$id = $_POST['saveID'];

			$options = get_option($this->admin_options_name);
			unset($options['saves'][$id]);

			if ($options['last_save_id'] == $id) {
				unset($options['last_save_id']);
			}

			update_option($this->admin_options_name, $options);
		}
		function ajax_get_saves_list() {
			$options = get_option($this->admin_options_name);
			$list = array();

			foreach ($options['saves'] as $id => $save) {
				$listItem = array(
					"id" => $id,
					"name" => $save['meta']['name'],
					"shortcode" => $save['meta']['shortcode'],
				);

				array_push($list, $listItem);
			}

			echo json_encode($list);
			die();
		}
		function ajax_validate_purchase_code() {
			// Validate
			$code = $_POST['code'];

			$envato_apikey = "fyyd39viwu1ljcgt0z1lu5c1b8ebp1zt";
			$envato_username = "nickys";

			// CURL-less method

			$url = 'http://marketplace.envato.com/api/v3/' . $envato_username . '/' . $envato_apikey . '/verify-purchase:' . $code . '.json';

			// use key 'http' even if you send the request to https://...
			$options = array(
				'http' => array(
					'method'  => 'GET',
					'header'  => "Content-type: application/x-www-form-urlencoded\r\n" . "User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36\r\n",
					'content' => ''
				)
			);
			
			$context = stream_context_create($options);
			$result = file_get_contents($url, false, $context);
			
			if ($result === FALSE) {
				echo "Error fetching the info: \n\n";
				echo $result;
			} else {
				$json_data = json_decode($result, true);
				if (isset($json_data['verify-purchase']) && count($json_data['verify-purchase']) > 0 && $json_data['verify-purchase']['item_id'] == '2826664') {
					// Store
					$options = get_option($this->admin_options_name);
					$options['purchase_code'] = $code;
					update_option($this->admin_options_name, $options);

					// Verify
					$options = get_option($this->admin_options_name);
					if ($options['purchase_code'] == $code) {
						echo 'success';
					}
				} else {
					print_r($json_data);
					die();
				}
			}

			die();
		}
	}
}

if (class_exists('ImageMapPro')) {
	$instance = new ImageMapPro();
	$instance->shortcodes();
}



add_action('admin_menu', array($instance, 'init_pages'));

add_action('admin_enqueue_scripts', array($instance, 'register_admin_includes'));
add_action('wp_enqueue_scripts', array($instance, 'register_client_includes'));

add_action('wp_ajax_image_map_pro_get_saves_list', array($instance, 'ajax_get_saves_list'));
add_action('wp_ajax_image_map_pro_store_save', array($instance, 'ajax_store_save'));
add_action('wp_ajax_image_map_pro_get_save', array($instance, 'ajax_get_save'));
add_action('wp_ajax_image_map_pro_delete_save', array($instance, 'ajax_delete_save'));
add_action('wp_ajax_image_map_pro_set_last_save', array($instance, 'ajax_set_last_save'));
add_action('wp_ajax_image_map_pro_get_last_save', array($instance, 'ajax_get_last_save'));