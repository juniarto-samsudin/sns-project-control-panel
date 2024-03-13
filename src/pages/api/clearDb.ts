import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';

const clearDbHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Replace 'your-bash-script.sh' with the actual path to your bash script
        const scriptPath = './public/scripts/clearDb.sh';

        // Execute the bash script
        exec(`bash ${scriptPath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing bash script: ${error.message}`);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            if (stderr) {
                console.error(`Bash script error: ${stderr}`);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            console.log(`Bash script output: ${stdout}`);
            res.status(200).json({ message: 'Bash script executed successfully' });
        });
    } catch (error) {
        console.error(`Error executing bash script: ${(error as Error).message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default clearDbHandler;