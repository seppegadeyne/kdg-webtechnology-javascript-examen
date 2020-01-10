//  DE CODE IN DIT BESTAND MAG JE NIET WIJZIGEN !!!

var data = [[200, "1/100", 11.0],  /* iso, shutter, diaphragm */
    [100, "1/250", 5.6],
    [400, "1/60", 8.0],
    [200, "1/400", 3.5],
    [100, "1/1000", 11.0]];

var numbers = [];

//  INDEX.HTML
function index_loaded() {
    init_index();
}

// PORTFOLIO.HTML
function portfolio_loaded() {
    let username = getParam("username");
    showName(username);
    showPicsHorizontal();
    numbers = getPhotoNumbers();
    createObjectsAndShowData();
    createTable();
}
