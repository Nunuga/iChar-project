import os
import socket


# Get local network IP
def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception as e:
        print(f"Error getting local IP: {e}")
        return "127.0.0.1"


# Read and process .env.example
def process_env_file(example_path, local_path):
    if not os.path.exists(example_path):
        print(f"File not found: {example_path}")
        return

    local_ip = get_local_ip()
    with open(example_path, "r") as f:
        content = f.read()

    # Replace all occurrences of 127.0.0.1 with local IP
    updated_content = content.replace("127.0.0.1", local_ip)

    with open(local_path, "w") as f:
        f.write(updated_content)

    print(f"Created {local_path} with updated IP.")


# Define paths
env_example = ".env.local.example"
env_local = ".env.local"
base_dir = os.getcwd()

frontend_path = os.path.join(base_dir, "frontend", env_local)
frontend_path_example = os.path.join(base_dir, "frontend", env_example)

backend_path = os.path.join(base_dir, "backend", env_local)
backend_path_example = os.path.join(base_dir, "backend", env_example)

# Process files
process_env_file(frontend_path_example, frontend_path)
process_env_file(backend_path_example, backend_path)
