export async function deleteCredential<T>(credentialId: number) {
  const response = await fetch(`/api/admin/credential/${credentialId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function linkCredential<T>(
  connectorId: number,
  credentialId: number
) {
  const response = await fetch(
    `/api/admin/connector/${connectorId}/credential/${credentialId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}