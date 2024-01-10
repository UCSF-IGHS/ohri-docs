#!/usr/bin/env sh

# Rename the directory with suffix _backup_current_timestamp

if [ -d "ohri-docs" ]; then
    cd ..
    mv ohri-docs ohri-docs_backup_$(date +%Y%m%d_%H%M%S)
    echo "--- OHRI Backup successful ---"
else
    echo "--- ohri-docs folder not found, backup not performed ---"
fi

# Clone the repository
git clone https://github.com/UCSF-IGHS/ohri-docs.git

# Navigate into the cloned directory
echo "--- Navigate into the cloned directory ---"
chown -R
cd ohri-docs
ls -la -t

# Install dependencies and build the code
echo "--- Installing dependencies and building the code ---"
npx yarn install
npx yarn build

ls -la -t

# Copy the built code to the specified path on the server using scp
# scp -r ./build user@server:/usr/share/tomcat/microfrontends/ohri-docs
# scp -P 3220 -r .next ohridocs@reports.globalhealthapp.net:/usr/share/tomcat/microfrontends/ohri_docs

echo "--- Copy Hidden folder .next to build folder to allow transfer to another server ---"
zip -r next_deploy.zip .next/
cp -R .next/* build

ls -la -t

scp -P 3220 -r build ohridocs@reports.globalhealthapp.net:/usr/share/tomcat/microfrontends/ohri_docs
scp -P 3220 -r next_deploy.zip ohridocs@reports.globalhealthapp.net:/usr/share/tomcat/microfrontends/ohri_docs

# scp -P 3220 -i /usr/local/ohridocs/.ssh/id_rsa -r .next ohridocs@reports.globalhealthapp.net:/usr/share/tomcat/microfrontends/ohri_docs
