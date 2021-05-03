// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010103040404020d0d0e0d0e0d0c0c010101050c0c0c050d0d0d0d0d0d0c0c010101050c0c0c0b04060d0304020c0c010101050c0c0c050d0d0d050c050c0e010101050c0c0c050d0d0d050c050c0c0c0c0c050c0c0c050d0d0d050c050c0c0e0a0e050c0c0c050d0d0d050c050c0e0e050e050c0c0c080a0a0a070c050c0c0e050e050c0c0c0e050c0c0c0c050c0e0e050e050c0304040904020c0c050c0c030904070c050d0d0d0d050c0c050c0c050c0c0c0c050d0d0d0d050c0c050c0c050c0c0c0c050d0d0d0d050c0c08060c0804040404070d0d0d0d050c0c0c0c0c01010d01010101010101080c0e0c0c0c01010d0101010101010101010101010c`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
