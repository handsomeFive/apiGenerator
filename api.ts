import request from './request.js';

interface ApiResponse {
  code: number;
  message: string;
  type: string;
}

interface Category {
  id: number;
  name: string;
}

interface Pet {
  category: Category;
  id: number;
  name: string;
  photoUrls: string[];
  status: string;
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
}

interface Order {
  complete: boolean;
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: string;
}

interface User {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  phone: string;
  userStatus: number;
  username: string;
}

interface getV2PetFindByStatusRequest {
  status: string[];
}

interface getV2PetFindByTagsRequest {
  tags: string[];
}

interface getV2StoreInventoryResponse {
[additionalProperties: string]: number
}

interface getV2UserLoginRequest {
  username: string;
  password: string;
}

export async function postV2PetPetIdUploadImage(petId: number){
  return request<ApiResponse>(`/v2/pet/${petId}/uploadImage`, {
    method: 'post',
  })
}

export async function postV2Pet(data: Pet){
  return request(`/v2/pet`, {
    method: 'post',
    data,
  })
}

export async function putV2Pet(data: Pet){
  return request(`/v2/pet`, {
    method: 'put',
    data,
  })
}

export async function getV2PetFindByStatus(params: getV2PetFindByStatusRequest){
  return request<Pet[]>(`/v2/pet/findByStatus`, {
    method: 'get',
    params,
  })
}

export async function getV2PetFindByTags(params: getV2PetFindByTagsRequest){
  return request<Pet[]>(`/v2/pet/findByTags`, {
    method: 'get',
    params,
  })
}

export async function getV2PetPetId(petId: number){
  return request<Pet>(`/v2/pet/${petId}`, {
    method: 'get',
  })
}

export async function postV2PetPetId(petId: number){
  return request(`/v2/pet/${petId}`, {
    method: 'post',
  })
}

export async function deleteV2PetPetId(petId: number){
  return request(`/v2/pet/${petId}`, {
    method: 'delete',
  })
}

export async function postV2StoreOrder(data: Order){
  return request<Order>(`/v2/store/order`, {
    method: 'post',
    data,
  })
}

export async function getV2StoreOrderOrderId(orderId: number){
  return request<Order>(`/v2/store/order/${orderId}`, {
    method: 'get',
  })
}

export async function deleteV2StoreOrderOrderId(orderId: number){
  return request(`/v2/store/order/${orderId}`, {
    method: 'delete',
  })
}

export async function getV2StoreInventory(){
  return request<getV2StoreInventoryResponse>(`/v2/store/inventory`, {
    method: 'get',
  })
}

export async function postV2UserCreateWithArray(data: User[]){
  return request(`/v2/user/createWithArray`, {
    method: 'post',
    data,
  })
}

export async function postV2UserCreateWithList(data: User[]){
  return request(`/v2/user/createWithList`, {
    method: 'post',
    data,
  })
}

export async function getV2UserUsername(username: string){
  return request<User>(`/v2/user/${username}`, {
    method: 'get',
  })
}

export async function putV2UserUsername(username: string,data: User){
  return request(`/v2/user/${username}`, {
    method: 'put',
    data,
  })
}

export async function deleteV2UserUsername(username: string){
  return request(`/v2/user/${username}`, {
    method: 'delete',
  })
}

export async function getV2UserLogin(params: getV2UserLoginRequest){
  return request<string>(`/v2/user/login`, {
    method: 'get',
    params,
  })
}

export async function getV2UserLogout(){
  return request(`/v2/user/logout`, {
    method: 'get',
  })
}

export async function postV2User(data: User){
  return request(`/v2/user`, {
    method: 'post',
    data,
  })
}

