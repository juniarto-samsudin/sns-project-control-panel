import { NextApiRequest, NextApiResponse } from 'next';
import Docker from 'dockerode';
import DockerodeCompose from 'dockerode-compose';


const simulateDbHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const docker = new Docker({ socketPath: '/var/run/docker.sock' });
    const compose = new DockerodeCompose(docker, './public/scripts/docker-compose-gpt2.yml', 'pythonscriptgpt2');

    (async () => {
        // Get the list of containers
        const containers = await docker.listContainers({ all: true});

        // Find the container that you want to remove
        const containerData = containers.find(container => container.Image === 'sns/pythongpt:2.00');

        if (containerData) {
            // Create a Container object
            const container = docker.getContainer(containerData.Id);

            // Remove the container
            if (containerData.State !== 'exited'){
                await container.stop();
            }
            await container.remove();
        }

        //await compose.pull();
        var state = await compose.up({ detached: true });
        console.log(state);


    })();

    res.status(200).json({ message: 'Simulating the database' });
};

export default simulateDbHandler;