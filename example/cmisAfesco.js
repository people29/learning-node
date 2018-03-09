"use strict";

const Q = require("q");
const CmisManagerFactory = require("../services/cmis.manager.factory");

(function execute() {
    let sourcePath = "/Investor";
    let destinationPath = "/SA/2";

    let investorIds =  [159863, 163541, 175598, 175604, 176604, 176606, 176611, 176618, 176626, 177014, 177016, 178683];
    return investorIds.map((id) => {
        let filePath = "/Investor/" + id;
        return moveFileInvestor(filePath, sourcePath, destinationPath);
    });

})();

function moveFileInvestor(filePath, sourcePath, destinationPath) {
    let cmisManager = CmisManagerFactory.newInstance();
    return cmisManager.connect().then((manager) => {
        // let findObjectIdPromise = manager.getObjectByPath("/download/20171227/SA/SCBT");
        // let findSourceIdPromise = manager.getObjectByPath("/download/20171227/SA");
        // let findDestinationIdPromise = manager.getObjectByPath("/download/20171226");

        let findObjectIdPromise = manager.getObjectByPath(filePath);
        let findSourceIdPromise = manager.getObjectByPath(sourcePath);
        let findDestinationIdPromise = manager.getObjectByPath(destinationPath);

        return Q.all([
            findObjectIdPromise,
            findSourceIdPromise,
            findDestinationIdPromise
        ]).spread((objects, sourceObjects, destinationObjects) => {
            console.log("objects", objects);
            console.log("sourceObjects", sourceObjects);
            console.log("destinationObjects", destinationObjects);
            return cmisManager.move(
                objects[0].succinctProperties["cmis:objectId"],
                sourceObjects[0].succinctProperties["cmis:objectId"],
                destinationObjects[0].succinctProperties["cmis:objectId"]
            );
        }).then((res) => {
            console.log("done");
        }).catch((err) => {
            console.log(err);
        });

    });
}