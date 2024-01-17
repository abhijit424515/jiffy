import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, bucket } from './firebase.js';

export async function list_files() {
	const snap = await getDoc(doc(db, 'tree', 'dir'));

	if (snap.exists()) {
		return snap.data().files;
	} else {
		return [];
	}
}

export async function get_file(path) {
	const ref_path = path.slice(2, path.length);
	const reference = ref(bucket, ref_path);

	const url = await getDownloadURL(reference);
	return url
}
