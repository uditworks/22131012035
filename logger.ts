Log("backend", "error", "handler", "received string, expected bool")

import axios from 'axios';



const LOG_API_URL = "http://20.244.56.144/evaluation-service/logs";
export async function Log(
  stack,
  level,
  pkg,
  message
) {
  const payload = {
    stack,
    level,
    package: pkg,
    message,
  };

  try {
    await axios.post(LOG_API_URL, payload);
    console.log(`Logged: ${level.toUpperCase()} - ${pkg} - ${message}`);
  } catch (error) {
    console.error("Failed to send log:", error);
  }
export async function Log(
  stack,
  level,
  pkg,
  message
) {}
  const payload = {
    stack,
    level,
    package: pkg,
    message,
  };
