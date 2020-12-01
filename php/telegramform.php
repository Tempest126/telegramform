<?php
$msgs = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $token = "1403700675:AAHdyjgc9IoS7TieCvpJ8DuDdnDPaEuHE-8";
    $chat_id = "547414992";
 
    if (!empty($_POST['data']) && !empty($_POST['time']) && !empty($_POST['adress'])){
        $bot_url = "https://api.telegram.org/bot{$token}/";
        $urlForPhoto = $bot_url . "sendPhoto?chat_id=" . $chat_id;
 
        if (isset($_POST['date'])) {
          if (!empty($_POST['data'])){
            $data = "Дата: " . strip_tags($_POST['data']) . "%0A";
          }
        }
 
        if (isset($_POST['time'])) {
          if (!empty($_POST['time'])){
            $phone = "Час: " . "%2B" . strip_tags($_POST['time']) . "%0A";
          }
        }
 
        if (isset($_POST['adress'])) {
          if (!empty($_POST['adress'])){
            $theme = "Адреса: " .strip_tags($_POST['adress']);
          }
        }
        // Формируем текст сообщения
        $txt = $data . $time . $adress;
 
        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($output && $sendTextToTelegram) {
            $msgs['okSend'] = 'Дякую!';
            echo json_encode($msgs);
        } elseif ($sendTextToTelegram) {
            $msgs['okSend'] = 'Дякую!';
            echo json_encode($msgs);
          return true;
        } else {
            $msgs['err'] = 'Помилка!';
            echo json_encode($msgs);
            die('Помилка!');
        }
 
    } else {
        $msgs['err'] = 'Помилка!';
        echo json_encode($msgs);;
    }
} else {
  header ("Location: /");
}
?>