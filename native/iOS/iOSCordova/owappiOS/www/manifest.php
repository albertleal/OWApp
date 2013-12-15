<?php
header('Content-type: text/manifest');

// It will be called downloaded.pdf
header('Content-Disposition: attachment; filename="manifest.mf"');
echo 'CACHE MANIFEST\n';
echo 'index.html';
exit;
?>