#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int *)malloc(sizeof(int) * 10); // 分配10个整数的空间
    if (ptr == NULL) {
        printf("Memory allocation failed\n");
        return -1;
    }

    free(ptr); // 正确释放
    ptr = NULL; // 防止重复释放

    return 0;
}
