const gunSkins = {
    "default": "assets/gun-skins/default.png",
    "neon": "assets/gun-skins/neon.png",
    "inferno": "assets/gun-skins/inferno.png"
};

let selectedSkin = "default";

function switchGunSkin(newSkin) {
    if (gunSkins[newSkin]) {
        selectedSkin = newSkin;
        console.log(`Equipped ${newSkin} skin!`);
    }
}