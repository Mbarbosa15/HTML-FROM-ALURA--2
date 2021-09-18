var listaFilmes = [
  "https://s2.glbimg.com/ZW5j93aHAzJKKTVCTOAKJ_HGCHM=/0x0:1400x1454/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/z/u/1kVPoBTVKa2O3jtRUD7A/spacejam-cartaz.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/a/a4/Hancock_1.jpg"
];
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<img src=" + listaFilmes[indice] + ">");
}