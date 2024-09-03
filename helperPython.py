import os

def find_babelrc_files(start_path):
    for root, dirs, files in os.walk(start_path):
        for file in files:
            if 'babel.config.js' in file or file.endswith('.babelrc'):
                print(os.path.join(root, file))

# Replace '/your/start/path' with the path you want to start the search from
start_path = '/Users/chandu/MS_Computer_Science_ASU/Semester_2/Data Mining/project/Route-Radius-Response'
find_babelrc_files(start_path)