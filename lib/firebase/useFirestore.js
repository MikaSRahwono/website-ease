import { useState, useEffect } from 'react'
import { firestore, storage} from './init_firebase';
import {collection, doc, addDoc, getDocs, getDoc, query, where} from 'firebase/firestore'
import { toFirestore, fromFirestore } from '../models/projectClass';
import { ref, uploadBytes } from 'firebase/storage';


export default function useFirestore() {
  const collRef = collection(firestore, "projects")

  const setProject = async (data) => {
    console.log('masuks2sss')
    console.log(data)
    const docRef = await addDoc(collRef, { ...data})
    console.log(docRef.id)
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
    console.log(list)
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

  const uploadPhotos = (listPhotos) => {
    const listId = []
    console.log("MASUK SINI")
    console.log(listPhotos)
    listPhotos.map((photo) => {
      listId.push(photo[1])
      const storageRef = ref(storage, "images/" + photo[1]);
      uploadBytes(storageRef, photo[0]).then((snapshot) => {
        console.log("uploaded")
      })
    })
    return listId;
  }

  return {
    setProject,
    getAllProjects,
    getCreativeProjects,
    getStudioProjects,
    getZoomProjects,
    uploadPhotos
  };
}