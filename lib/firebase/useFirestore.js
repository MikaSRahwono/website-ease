import { useState, useEffect } from 'react'
import { firestore, storage} from './init_firebase';
import {collection, doc, addDoc, getDocs, getDoc, query, where} from 'firebase/firestore'
import { toFirestore, fromFirestore } from '../models/projectClass';
import { ref, uploadBytes , getDownloadURL} from 'firebase/storage';


export default function useFirestore() {
  const collRef = collection(firestore, "projects")

  const docRef = (id) => (doc(firestore, "projects", id))

  const setProject = async (data) => {
    const docRef = await addDoc(collRef, { ...data})
    return docRef.id
  }

  const getAllProjects = async () => {
    var listData = [];
    var list = [];
    const querySnapshot = await getDocs(collRef)
    querySnapshot.forEach((doc) => {
        listData.push(fromFirestore(doc).id)
        listData.push(fromFirestore(doc).toString())
        list.push(listData)
        listData = []
    });
    return list;
  }

  const getZoomProjects = async () => {
    var listData = [];
    var list = [];
    const querySnapshot = await getDocs(query(collRef, where('category', '==', 'zoom')))
    querySnapshot.forEach((doc) => {
        listData.push(fromFirestore(doc).id)
        listData.push(fromFirestore(doc).toString())
        list.push(listData)
        listData = []
    });
    return list;
  }

  const getCreativeProjects = async () => {
    var listData = [];
    var list = [];
    const querySnapshot = await getDocs(query(collRef, where('category', '==', 'creative')))
    querySnapshot.forEach((doc) => {
        listData.push(fromFirestore(doc).id)
        listData.push(fromFirestore(doc).toString())
        list.push(listData)
        listData = []
    });
    return list;
  }

  const getStudioProjects = async () => {
    var listData = [];
    var list = [];
    const querySnapshot = await getDocs(query(collRef, where('category', '==', 'studio')))
    querySnapshot.forEach((doc) => {
        listData.push(fromFirestore(doc).id)
        listData.push(fromFirestore(doc).toString())
        list.push(listData)
        listData = []
    });
    return list;
  }

  const getProject = async (id) => {
    const docSnap = await getDoc(docRef(id))
    var data = ""
    if (docSnap.exists()) {
      data = docSnap.data()
      console.log("Document data:", data);
    } else {
      data = "No such document!"
      console.log("No such document!");
    }
    return data;
  }

  const uploadPhotos = (listPhotos) => {
    const listId = []
    listPhotos.map((photo) => {
      listId.push(photo[1])
      const storageRef = ref(storage, "images/" + photo[1]);
      uploadBytes(storageRef, photo[0]).then((snapshot) => {
      })
    })
    return listId;
  }

  const getPhoto = async (id) =>  {
    try {
      var url = await getDownloadURL(ref(storage, "images/" + id))
    } catch {
      var url = ""
    }
    return url
  }

  return {
    setProject,
    getAllProjects,
    getCreativeProjects,
    getStudioProjects,
    getZoomProjects,
    uploadPhotos,
    getPhoto,
    getProject
  };
}