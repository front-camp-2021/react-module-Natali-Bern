export const GET_PAGINATION = 'GET_PAGINATION';
export const NEXT = 'TO_NEXT';
export const PREV = 'TO_PREV';

export const pagination = (payload) => {
  return {
    type: GET_PAGINATION,
    payload
  }
}

export const TO_NEXT = () => {
  return {
    type: TO_NEXT
  }
}

export const TO_PREV = () => {
  return {
    type: TO_PREV
  }
}