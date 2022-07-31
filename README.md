# Handwritten paragraphs from IAM datasets are uploaded to VGG annotation tool. Rectangle is drawn around each word of all the paragraphs. 
Those images with rectangles are exported as .json file. .json file contains the information about position, width and height of each rectangles.
That .json file is exported using json library in python.
Position, width and height of rectangles of each paragraph is extracted one by one. 
A black image of size equal to size of paragraph image is created.
A rectangle is drawn of size equal to size of rectangle from json file and at same position with white color filled.
This is done in a loop until all the paragraphs' masked image is generated.
The masked image is stored in 'mask' folder.
