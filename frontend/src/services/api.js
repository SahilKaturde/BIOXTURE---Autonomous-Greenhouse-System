
const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"
).replace(/\/+$/, "");

// Check backend connection
export async function checkBackend() {
  const response = await fetch(`${API_BASE_URL}/health`);

  if (!response.ok) {
    throw new Error(`Backend request failed: ${response.status}`);
  }

  return response.json();
}

// CREATE - Add a plant
export async function createPlant(plantData) {
  const response = await fetch(`${API_BASE_URL}/plants/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plantData),
  });

  if (!response.ok) {
    throw new Error(`Failed to create plant: ${response.status}`);
  }

  return response.json();
}

// READ - Get all plants
export async function getPlants() {
  const response = await fetch(`${API_BASE_URL}/plants/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch plants: ${response.status}`);
  }

  return response.json();
}

// READ - Get one plant by UUID
export async function getPlant(plantId) {
  const response = await fetch(
    `${API_BASE_URL}/plants/${encodeURIComponent(plantId)}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch plant: ${response.status}`);
  }

  return response.json();
}

// UPDATE - Update a plant
export async function updatePlant(plantId, plantData) {
  const response = await fetch(
    `${API_BASE_URL}/plants/${encodeURIComponent(plantId)}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to update plant: ${response.status}`);
  }

  return response.json();
}

// DELETE - Delete a plant
export async function deletePlant(plantId) {
  const response = await fetch(
    `${API_BASE_URL}/plants/${encodeURIComponent(plantId)}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to delete plant: ${response.status}`);
  }

  if (response.status === 204) {
    return true;
  }

  return response.json();
}
