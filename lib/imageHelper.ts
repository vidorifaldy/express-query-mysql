
import { access, F_OK } from 'fs';
import { resolve as _resolve } from 'path';

const IMAGE_FILE_MAXIMUM = (2 * 1000 * 1000);
const IMAGE_FILE_PATH = "file-evidence"

let IMAGE_RETURN = {
	image_exist : Boolean,
	message : String
}

let imageHelper = {

	checkLimitFile(file, result) {
		file.size > IMAGE_FILE_MAXIMUM ? result(true) : result(false);
	},

	async isFileExist(filename){
		filePath = _resolve(IMAGE_FILE_PATH + '/' +filename);
		console.log('Prepare file with path : ' + filePath);

		let tryCheck = new Promise(function(resolve, reject){
			access(filePath, F_OK,  function(err) {
				if (err) {
					IMAGE_RETURN ={
						image_exist : true,
						message : "*** File Tidak Ditemukan ***"
					}
					resolve(IMAGE_RETURN);
				}
				IMAGE_RETURN ={
					image_exist : false,
					message : "*** File Ditemukan ***"
				}
				resolve(IMAGE_RETURN);
			});
		});

		return await tryCheck;
	},

	saveFileEvidence(fileEvidence, result) {
		fileEvidence.mv('./file-evidence/'+fileEvidence.name, function(err) {
			if (err) result(err);
		});
	}
}

export default imageHelper;
