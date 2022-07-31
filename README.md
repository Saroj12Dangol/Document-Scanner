# Dataset Generation

Handwritten paragraphs from IAM datasets are uploaded to VGG annotation tool. Rectangle is drawn around each word of all the paragraphs. 
Those images with rectangles are exported as .json file. .json file contains the information about position, width and height of each rectangles.
That .json file is exported using json library in python.
Position, width and height of rectangles of each paragraph is extracted one by one. 
A black image of size equal to size of paragraph image is created.
A rectangle is drawn of size equal to size of rectangle from json file and at same position with white color filled.
This is done in a loop until all the paragraphs' masked image is generated.
The masked image is stored in 'mask' folder.

# Unet Model
'Images' and 'mask' folders from dataset generation are loaded to google drive and used in google colab for training Unet model for word segmentation.
The images are opened in grayscale mode and are binarized using THRESH_BINARY_INV.
The images are resized into size of (512, 512) and normalized and mask images are done same.
Then Unet architecture is created. Model uses binary_crossentropy as loss function, adam as optimizer. 90% data are used for training while 10% are for validation. Training is done for 12 epochs with batch size of 2.
