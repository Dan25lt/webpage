<?php
    setcookie("loguedIn", false, time() + (86400 * 30), "/"); // 86400 = 1 day
    setcookie("username", '', time() + (86400 * 30), "/"); // 86400 = 1 day
    setcookie("puesto", '', time() + (86400 * 30), "/"); // 86400 = 1 day

    header("Location: ./index.html");
    die();
?>