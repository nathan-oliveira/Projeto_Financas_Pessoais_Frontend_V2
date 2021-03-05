const URL_API = 'http://localhost:3000/api'

export function POST_USER(formData) {
  return {
    url: `${URL_API}/users`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
  }
}

export function POST_LOGIN(formData) {
  return {
    url: `${URL_API}/session`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
  }
}

export function VALIDAR_TOKEN(token) {
  return {
    url: `${URL_API}/validarToken`,
    options: {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
  }
}

export function GET_BUSINESS(token) {
  return {
    url: `${URL_API}/business`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
  }
}

export function POST_BUSSINESS({ formData, token }) {
  return {
    url: `${URL_API}/business`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(formData)
    }
  }
}

export function DELETE_BUSSINESS({ id, token }) {
  return {
    url: `${URL_API}/business/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      },
    }
  }
}

export function GET_BUSINESS_ID({ id, token }) {
  return {
    url: `${URL_API}/business/${id}`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
  }
}

export function PUT_BUSSINESS({ id, formData, token }) {
  return {
    url: `${URL_API}/business/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(formData)
    }
  }
}

export function GET_GOALS(token) {
  return {
    url: `${URL_API}/goal`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
  }
}

export function POST_GOAL({ formData, token }) {
  return {
    url: `${URL_API}/goal`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(formData)
    }
  }
}

export function GET_GOAL_ID({ id, token }) {
  return {
    url: `${URL_API}/goal/${id}`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
  }
}

export function DELETE_GOAL({ id, token }) {
  return {
    url: `${URL_API}/goal/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      },
    }
  }
}

export function PUT_GOAL({ id, formData, token }) {
  return {
    url: `${URL_API}/goal/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(formData)
    }
  }
}

export function GET_CATEGORY(token) {
  return {
    url: `${URL_API}/category`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
  }
}

export function POST_CATEGORY({ formData, token }) {
  return {
    url: `${URL_API}/category`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(formData)
    }
  }
}

export function GET_CATEGORY_ID({ id, token }) {
  return {
    url: `${URL_API}/category/${id}`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
  }
}